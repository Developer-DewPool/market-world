import * as React from 'react'; 
import { Text, View, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
export default class ContactScreen extends React.Component {
    constructor(props) {
        super(props); this.state = {
            activeIndex: 0, carouselItems: [
                {
                    title: "Home Page",
                    text: "Welcome to My Application",
                },
                {
                    title: "Chats",
                    text: "All chats will appear here",
                },
                {
                    title: "Calls",
                    text: "All calls will appear here",
                },
                {
                    title: "Gallery", text: "Your Photos",
                },
                {
                    title: "Settings",
                    text: "This a settings window",
                },
            ]
        }
    }
    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: '#e4fa96', borderRadius: 6,
                height: 251,
                padding: 51,
                marginLeft: 26,
                marginRight: 26,
            }}>
                <Text style={{ fontSize: 31 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#a1285e', paddingTop: 51, }}>
                <View style={
                    { flex: 1, flexDirection: 'row', justifyContent: 'center', }
                }>
                    <Carousel layout={"default"}
                        ref={ref => this.carousel = ref} data={this.state.carouselItems} sliderWidth={301} itemWidth={301} renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </SafeAreaView>
        );
    }
}