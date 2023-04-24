import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {GET} from '../Api/TMDBApi';
import Styles from '../Styles';
import {ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


const FilmDetail = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
   const IMAGE_POSTER_URL = 'https://image.tmdb.org/t/p/original';
   const Constants = {
    textColor: '#fff',
    baseColor: '#151C26',
    fadedColor: '#969696',
    secondaryColor: '#F4C10F',
  };
  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);

  const getGenre = () => {
    return details.genres.map(genre => (
      <View style={Styles.genreContainer}>
        <Text style={Styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <ActivityIndicator size="large" textColor={'#fff'} />      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.imageBg}
            />
          </View>
          <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
          {details.homepage ? (
            <View style={Styles.linkContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(details.homepage);
                }}>
                <Icon name="link" color={Constants.textColor} size={22} />
              </TouchableOpacity>
            </View>
          ) : null}

          <Text style={Styles.heading}>OVERVIEW</Text>
          <Text style={Styles.overview}>{details.overview}</Text>

          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>BUDGET</Text>
              <Text style={Styles.details}>$ {details.budget}</Text>
            </View>

            <View>
              <Text style={Styles.heading}>DURATION</Text>
              <Text style={Styles.details}>{details.runtime} min.</Text>
            </View>

            <View>
              <Text style={Styles.heading}>RELEASE DATE</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
          </View>

          <Text style={Styles.heading}>GENRE</Text>
          <View style={{display: 'flex', flexDirection:'row'}}>
          {getGenre()}

          </View>

          
        </View>
      )}
    </ScrollView>
  );
};

export default FilmDetail;