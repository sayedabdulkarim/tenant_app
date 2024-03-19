import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const { width: screenWidth } = Dimensions.get("window");

const SliderComponent = ({ belowText }) => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        activeDotColor="yellow"
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        <View style={styles.slide}>
          <View style={styles.leftColumn}>
            <Image
              style={styles.fullImage}
              source={{
                uri: "https://image.speedhome.com/speedrent-backend/images/property/ZBVUNVIP/6PFHUMHQJNLAUYMW-small.jpg",
              }}
            />
          </View>
          <View style={styles.rightColumn}>
            <Image
              style={styles.halfImage}
              source={{
                uri: "https://image.speedhome.com/speedrent-backend/images/property/ZBVUNVIP/6PFHUMHQJNLAUYMW-small.jpg",
              }}
            />
            <View
              style={{
                // borderWidth: 2,
                // borderColor: "blue",
                height: "50%",
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.quarterImage}
                source={{
                  uri: "https://image.speedhome.com/speedrent-backend/images/property/ZBVUNVIP/6PFHUMHQJNLAUYMW-small.jpg",
                }}
              />
              <Image
                style={styles.quarterImage}
                source={{
                  uri: "https://image.speedhome.com/speedrent-backend/images/property/ZBVUNVIP/QIXASB0BQTAXELXP-small.jpg",
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri: "https://image.speedhome.com/speedrent-backend/images/property/ZBVUNVIP/QIXASB0BQTAXELXP-small.jpg",
            }}
          />
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      <View style={styles.detailContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.price}>RM 1,400</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.deposit}>
              <Text style={styles.yellow}>ZERO</Text> DEPOSIT
            </Text>
            <Text style={styles.unit}>WHOLE UNIT</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SliderComponent;

const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    //borderColor: "red",
    padding: 12,
    width: screenWidth,
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: "green",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  priceContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  leftContainer: {
    // borderWidth: 1,
    // borderColor: "yellow",
    width: "40%",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
  },
  rightContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deposit: {
    borderWidth: 1,
    borderColor: "#90278e",
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#90278e",
    color: "#fff",
    overflow: "hidden",
    letterSpacing: 0.6,
  },
  yellow: {
    color: "#FFE119",
    fontWeight: "bold",
  },
  unit: {
    borderWidth: 1,
    borderColor: "#eee",
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#eee",
    overflow: "hidden",
    letterSpacing: 0.6,
  },
  //
  wrapper: {
    height: 250,
    // borderRadius: 12,
    overflow: "hidden",
  },
  slide: {
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  leftColumn: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  rightColumn: {
    width: "50%",
    justifyContent: "space-between",
  },
  fullImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  halfImage: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
  quarterImage: {
    width: "50%",
    height: "100%",
    resizeMode: "cover",
  },
  dotStyle: {
    //    backgroundColor: "rgba(0,0,0,.2)",
    backgroundColor: "#fff",
    width: 6,
    height: 6,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    width: 10,
    height: 6,
    borderRadius: 6,
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "yellow",
  },
});
