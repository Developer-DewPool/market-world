import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);


const persons = [
  {
    id: "1",
    url: 'https://thumbs.dreamstime.com/b/demo-test-ideas-trailer-trial-concept-76003902.jpg',
    name: "Earnest Green",
  },
  {
    id: "2",
    url: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png',
    name: "Winston Orn",
  },
  {
    id: "3",
    url: 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
    name: "Carlton Collins",
  },
  {
    id: "4",
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    name: "Malcolm Labadie",
  },
  {
    id: "5",
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
    name: "Michelle Dare",
  },
  {
    id: "6",
    url: 'https://thumbs.dreamstime.com/b/demo-test-ideas-trailer-trial-concept-76003902.jpg',
    name: "Carlton Zieme",
  },
  {
    id: "7",
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    name: "Jessie Dickinson",
  },
  {
    id: "8",
    url: 'https://thumbs.dreamstime.com/b/demo-test-ideas-trailer-trial-concept-76003902.jpg',
    name: "Julian Gulgowski",
  },
  {
    id: "9",
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
    name: "Ellen Veum",
  },
  {
    id: "10",
    url: 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
    name: "Lorena Rice",
  }
];

const data = [
  {
    id: 1,
    name: 'React JS',
    url: 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
  },
  {
    id: 2,
    name: 'JavaScript',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
  },
  {
    id: 3,
    name: 'Node JS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
  },
];

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 5,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image source={{ uri: item.url }} resizeMode="contain" style={{ width: 100, height: 100 }} />
      <Text style={{ marginVertical: 5, fontSize: 20, fontWeight: 'bold', color: 'black' }}>
        {item.name}
      </Text>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <SafeAreaView style={{ backgroundColor: '#a1285e', flex: 1 }}>
      <View style={{ flex: 1, padding: 2 }}>
        <View style={{ marginVertical: 10 }}>
          <Carousel
            ref={isCarousel}
            data={data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={index => setIndex(index)}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              bottom: 15,
              width: 8,
              height: 8,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: '#F4BB41',
            }}
            tappableDots={true}
            inactiveDotStyle={{
              backgroundColor: 'black',
              // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 20
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            Dashboard List
          </Text>
        </View>
        <View style={styles.container}>
          <ScrollView>
            <View>
              {persons.map((person) => {
                return (
                  <Card style={styles.container}>
                    <Card.Content>
                      <Title><Text style={styles.item}>{person.name}</Text></Title>
                    </Card.Content>
                    <Card.Cover resizeMode="contain" source={{ uri: person.url }} />
                    <Card.Content>
                      <Paragraph>A Computer Science portal for Geeks</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                      <Button 
                      onPress={
                        () => navigation.navigate('Details')
                      }
                      >Add To Favourites</Button>
                    </Card.Actions>
                  </Card>
                );
              })}
            </View>
          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container: {
    alignContent: 'center',
    top: 0,
    margin: 5,
    padding: 2,
    flex: 1,
  },
  item: {
    padding: 5,
    fontSize: 25,
    marginTop: 0,
  }
});
export default HomeScreen;