import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const PromotionSlider = () => {
  return (
    <ScrollView
      horizontal
      decelerationRate={"fast"} // This controls the deceleration after the user lifts their finger
      snapToInterval={width - 20} // Snap to the interval of the width of your slide minus any margins
      snapToAlignment={"start"} // Align items to the start of the scroll view
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {/* Your Views/Slides */}
      <View style={styles.slide}>
        {/* <Text style={styles.text}>Slide 1 Content</Text> */}
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCIvyusG0J6aJBOGizPc9E9FSiNEJ_5GZFjMeH81okdmIevDgsqRBDrs0Ru-o0kGXJaQ",
          }}
          style={styles.slideImage}
        />
      </View>
      <View style={styles.slide}>
        {/* <Text style={styles.text}>Slide 1 Content</Text> */}
        <Image
          source={{
            uri: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
          }}
          style={styles.slideImage}
        />
      </View>
      <View style={styles.slide}>
        {/* <Text style={styles.text}>Slide 1 Content</Text> */}
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCIvyusG0J6aJBOGizPc9E9FSiNEJ_5GZFjMeH81okdmIevDgsqRBDrs0Ru-o0kGXJaQ",
          }}
          style={styles.slideImage}
        />
      </View>
      <View style={styles.slide}>
        {/* <Text style={styles.text}>Slide 1 Content</Text> */}
        <Image
          source={{
            uri: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
          }}
          style={styles.slideImage}
        />
      </View>
      {/* ... more slides */}
    </ScrollView>
  );
};

export default PromotionSlider;

const styles = StyleSheet.create({
  container: {
    height: 200, // Set the height of the slider
  },
  slide: {
    width: width - 50, // Width of the slide minus margin
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green", // Background color for your slide
    margin: 10, // Add margin if you want space between the slides
    borderWidth: 1,
    borderColor: "red",
  },
  slideImage: {
    // width: width - 40, // Full width of the slide minus margin on both sides
    width: "100%", // Full width of the slide minus margin on both sides
    height: 150, // Adjust the height as needed
    resizeMode: "cover", // Cover the entire area of the slide
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10, // Space between text and image
  },
});
