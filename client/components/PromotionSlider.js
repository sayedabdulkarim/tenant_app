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
      //   horizontal
      //   pagingEnabled
      //   showsHorizontalScrollIndicator={false}
      //   style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      // Remove pagingEnabled if you want a free-scrolling experience
      // pagingEnabled
      decelerationRate={0} // Adjust the deceleration rate for a natural feel
      snapToInterval={width} // Optional: if you still want snapping, adjust the interval
      snapToAlignment={"center"} // Optional: if using snapToInterval
    >
      {/* Add as many Views as there are slides */}
      <View style={styles.slide}>
        <Text style={styles.text}>Slide 1 Content</Text>
        {/* Use an Image component for visual content */}
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCIvyusG0J6aJBOGizPc9E9FSiNEJ_5GZFjMeH81okdmIevDgsqRBDrs0Ru-o0kGXJaQ",
          }}
          style={styles.slideImage}
        />
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Slide 2 Content</Text>
        <Image
          source={{
            uri: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
          }}
          style={styles.slideImage}
        />
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Slide 2 Content</Text>
        <Image
          source={{
            uri: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
          }}
          style={styles.slideImage}
        />
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Slide 2 Content</Text>
        <Image
          source={{
            uri: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
          }}
          style={styles.slideImage}
        />
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Slide 2 Content</Text>
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
    width: width - 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green", // Background color for your slide
    borderWidth: 1,
    borderColor: "red",
  },
  slideImage: {
    // Your styles for the image
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
