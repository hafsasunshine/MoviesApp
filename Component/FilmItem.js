import React, { Component } from 'react';
import { StyleSheet, View,Button, Text, Image, Pressable } from 'react-native'
import { getImageFromApi } from '../Api/TMDBApi'
import { TouchableOpacity } from 'react-native-gesture-handler';

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>

class FilmItem extends Component {
  
render() {
    const film =this.props.film 

    return (
      
      <TouchableOpacity      onPress={() => this.props.navigation.push('Detail', {movieId: film.id})}  style={styles.main_container}>
       
        <Image
  style={styles.image}
  source={{uri: getImageFromApi(film.poster_path)}}
/>

        <View   style={styles.content_container}>
          <View  style={styles.header_container}>
            <Text style={{fontWeight : 'bold',fontSize: 20,flex: 1,flexWrap: 'wrap',paddingRight: 5}}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View>
        </View>
       
        </TouchableOpacity>    )
}
}
const styles = StyleSheet.create({
  main_container: {
    height: 210,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
 
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})



export default FilmItem;






