import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
export default function Screen_4() {
  const [price, setPrice] = useState(141800);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  const showToast = () => {
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Đặt hàng thành công",
      text2: "Bạn có thể xem lại đơn hàng tại mục Đơn hàng của tôi",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 100,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={require("../assets/book.png")}
        ></Image>
        <View>
          <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>{formatPrice(price * quantity)}đ</Text>
          <Text style={styles.sale}>{formatPrice(price * quantity)} đ</Text>
          <View style={styles.quantity}>
            <View style={styles.buy}>
              <TouchableOpacity
                style={styles.buttonQuantity}
                onPress={() => {
                  setQuantity(quantity - 1);
                  setPrice(this.price - quantity * price);
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 12 }}>-</Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 15, textAlign: "center" }}>
                {quantity}
              </Text>
              <TouchableOpacity
                style={styles.buttonQuantity}
                onPress={() => {
                  setQuantity(quantity + 1);
                  setPrice(this.price * quantity);
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 12 }}>+</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "rgba(19, 79, 236, 1)",
              }}
            >
              Mua sau
            </Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.discount}>
          <Text style={{ paddingLeft: 10, fontSize: 12, fontWeight: 700 }}>
            Mã giảm giá đã lưu
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 700,
              marginTop: 2,
              marginLeft: 10,
              color: "rgba(19, 79, 236, 1)",
            }}
          >
            Xem tại đây
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "space-around",
            justifyContent: "space-around",
            marginVertical: 12,
          }}
        >
          <View
            style={{
              borderWidth: 2,
              flexDirection: "row",
              width: 208,
              height: 45,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{ backgroundColor: "yellow", width: 32, height: 16 }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                justifyContent: "flex-start",
              }}
            >
              Mã giảm giá
            </Text>
          </View>
          <Button title="Áp dụng" color={"rgba(10, 94, 183, 1)"} />
        </View>
        <View style={styles.ticket}>
          <Text style={styles.text}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "rgba(19, 79, 236, 1)",
              paddingLeft: 10,
            }}
          >
            Nhập tại đây?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 700 }}>Tạm tính</Text>
          <Text style={styles.price}>{formatPrice(price * quantity)} đ</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 110,
            backgroundColor: "rgba(196, 196, 196, 1)",
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(128, 128, 128, 1)",
            }}
          >
            Thành tiền
          </Text>
          <Text style={styles.price}>{formatPrice(price * quantity)} đ</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => showToast()}
          style={{
            backgroundColor: "rgba(229, 57, 53, 1)",
            marginHorizontal: 10,
            marginVertical: 15,
            width: 331,
            height: 45,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 700,
              color: "white",
            }}
          >
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
      <Toast></Toast>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    position: "relative",
  },
  image: {
    width: 104,
    height: 127,
  },
  text: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 10,
  },
  price: {
    fontWeight: 700,
    fontSize: 18,
    color: "rgba(238, 13, 13, 1)",
  },
  sale: {
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },
  buy: {
    flexDirection: "row",
  },
  buttonQuantity: {
    width: 20,
    height: 20,
    backgroundColor: "gray",
  },
  discount: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
    marginHorizontal: 22,
  },
  ticket: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20,
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderColor: "rgba(196, 196, 196, 1)",
    padding: 15,
  },
  content: {
    flex: 1,
  },
  toastOverlay: {
    position: "absolute",
    top: 0, // Adjust this value to position the toast as desired
    left: 0, // Adjust this value to position the toast as desired
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
    borderRadius: 5,
  },
});
