import * as React from 'react';
import { View } from 'react-native';
import TrendingMovies from './TrendingMovies';
import Styles from './Styles';
import TrendingPeople from './TrendingPeople';

const  Tendances=props=>{
return(
<View style={Styles.sectionBg}>
<TrendingPeople title="Acteurs de la semaine" url="/trending/person/week" />
<TrendingMovies
        title="Films tendance"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
</View>
)
}
export default Tendances;