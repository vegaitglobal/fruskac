import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width, height } from '../../utils/screen'
import Styles from './Styles';

export default class Article extends React.Component {

  constructor() {
    super()
    this.state = {
      
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', "Article"),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#222',
    };
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#fff"}}>
        
        <AutoHeightImage
            width={width}
            style={Styles.cover}
            source={require("../../assets/images/article1.png")}
        />

        <ScrollView style={Styles.article}>
          <View style={Styles.articleBody}>

            <Text style={Styles.articleTitle}>
              Naslov ovog članka!
            </Text>
            <Text style={Styles.articleText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar euismod lacus, vitae convallis mauris luctus at. Praesent malesuada ultricies aliquet. Morbi sed urna quam. Mauris cursus placerat risus, ac sodales orci consequat vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat, metus sit amet ullamcorper laoreet, diam dolor aliquam lectus, at interdum erat diam elementum urna. Donec sed arcu urna. Vivamus vitae posuere quam. Cras vitae mi nec nunc eleifend bibendum non vel ante. Ut metus mi, malesuada vitae leo eget, pellentesque scelerisque lacus. Vivamus sit amet malesuada enim. Nullam eget laoreet dui.
            </Text><Text style={Styles.articleText}>
              Maecenas sed ligula et neque venenatis tempus. Quisque sodales dolor metus, in molestie urna tempus id. Curabitur elementum luctus suscipit. Donec pretium pharetra placerat. Curabitur elit orci, congue in lectus quis, molestie dignissim dui. Pellentesque lacus odio, fermentum sit amet mollis eget, condimentum vitae tellus. Mauris ultricies non nulla a bibendum. Integer hendrerit magna quam, sodales sodales nunc consectetur nec. Ut a pretium metus, in scelerisque justo. Vestibulum pretium orci tempor dignissim bibendum. Phasellus tristique congue aliquet. Nunc hendrerit porta diam ultricies elementum. Suspendisse at arcu suscipit, porta metus a, sollicitudin mi. Etiam libero metus, sollicitudin et neque sed, pharetra rutrum est.
            </Text><Text style={Styles.articleText}>
              Aliquam vulputate est augue. Aenean sit amet mattis magna. Mauris non libero ut tellus porttitor suscipit ut dictum justo. Phasellus ac tempor turpis. Suspendisse eu magna vel nisl consectetur rhoncus vitae eget nunc. In elementum auctor felis, efficitur ultrices orci rhoncus quis. Etiam at purus sit amet risus commodo venenatis. Etiam sodales sem quis neque semper, eget consequat nisl commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sollicitudin tortor nunc, non finibus nunc lacinia eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean fermentum quam ac lacus tempus euismod.
            </Text><Text style={Styles.articleText}>
              Proin eget velit nulla. Pellentesque ut lacus sapien. Donec vel lacus tincidunt, tempor nibh vel, tincidunt enim. Praesent convallis, elit in vulputate ultricies, mi sapien finibus urna, quis congue ante ante eu est. Sed rutrum risus et dui auctor, vitae laoreet tellus imperdiet. Praesent dui ligula, maximus vel tellus quis, hendrerit gravida ante. Suspendisse imperdiet lorem in dignissim egestas. Duis finibus ultricies nibh, non lobortis massa dapibus nec. Pellentesque eget tempor orci. Proin volutpat, augue et aliquam lacinia, justo enim tempor mi, eget bibendum leo dolor ac purus. Aenean id odio nec ante posuere ultricies quis a urna. Nunc ipsum augue, posuere vitae urna ac, pulvinar dignissim nisi.
            </Text><Text style={Styles.articleText}>
              Aenean cursus venenatis rutrum. Nullam cursus sem eu leo venenatis luctus. Ut viverra imperdiet sollicitudin. Proin scelerisque euismod augue nec finibus. Proin ultricies, mi a ultricies ullamcorper, purus ipsum auctor est, at vestibulum sem arcu nec enim. Donec scelerisque ullamcorper sem maximus cursus. Aliquam mattis quam enim, sit amet aliquet risus convallis ut. Donec maximus dapibus commodo. Ut nisi est, sagittis vitae urna at, tempor molestie tortor. 
            </Text>

          </View>
        </ScrollView>

      </View>
    );
  }
}