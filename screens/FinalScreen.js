import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../component/Card";

const FinalScreen = (props) => {
  if (props.yesCount === 0) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
            Covid 19 taşıma olasalığınız %{props.no * 0}
            Hastalık belirtisi bulunmamaktatır.Sağlıklı Günler Dilerim.  (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 1) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 2) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 3) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
            Covid 19 taşıma olasalığınız %{props.yesCount * 10} . Sağlıklı Günler
            Dilerim
          </Text>
          <Text style={styles.FinalScreenMessage}> 
          Daha iyi bir sonuca ulaşmak için yakın bir sağlık kuruluşunuzu aramanızı tavsiye ederiz.
            <Text>örneğin Alo 184 </Text>
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 4) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz{" "}
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
          <Text style={styles.FinalScreenMessage}> 
          Daha iyi bir sonuca ulaşmak için yakın bir sağlık kuruluşunuzu aramanızı tavsiye ederiz.
            <Text>örneğin Alo 184 </Text>
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 5) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
          <Text style={styles.FinalScreenMessage}> 
          Daha iyi bir sonuca ulaşmak için yakın bir sağlık kuruluşunuzu aramanızı tavsiye ederiz.
            <Text>örneğin Alo 184 </Text>
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 6) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
          <Text style={styles.FinalScreenMessage}> 
          Daha iyi bir sonuca ulaşmak için yakın bir sağlık kuruluşunuzu aramanızı tavsiye ederiz.
            <Text>örneğin Alo 184 </Text>
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 7) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
          <Text style={styles.FinalScreenMessage}> 
          Daha iyi bir sonuca ulaşmak için yakın bir sağlık kuruluşunuzu aramanızı tavsiye ederiz.
            <Text>örneğin Alo 184 </Text>
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 8) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
          <Text style={styles.FinalScreenMessage}> 
          Daha iyi bir sonuca ulaşmak için yakın bir sağlık kuruluşunuzu aramanızı tavsiye ederiz.
            <Text>örneğin Alo 184 </Text>
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 9) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
          <Text style={styles.FinalScreenMessage}> 
          Daha iyi bir sonuca ulaşmak için yakın bir sağlık kuruluşunuzu aramanızı tavsiye ederiz.
            <Text>örneğin Alo 184 </Text>
          </Text>
        </Card>
      </View>
    );
  } else if (props.yesCount === 10) {
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
          <Text style={styles.FinalScreenMessage}>
             Covid 19 taşıma olasalığınız %{props.yesCount * 10} .Sağlıklı Günler
Dilerim. (Testin hiçbir gerçerliliği yoktur  !)
          </Text>
          <Text style={styles.FinalScreenMessage}> 
          Daha iyi bir sonuca ulaşmak için yakın bir sağlık kuruluşunuzu aramanızı tavsiye ederiz.
            <Text>örneğin Alo 184 </Text>
          </Text>
        </Card>
      </View>
    );
  } 
  else
    return (
      <View>
        <Card style={styles.FinalScreenCard}>
          <Text style={styles.FinalScreenHeader}>
            Sonuç Ekranına Hoş Geldiniz
          </Text>
          <View flexDirection="row">
            <Text style={styles.FinalScreenYes}>
              Evet Sayısı : {props.yesCount}
            </Text>
            <Text style={styles.FinalScreenNo}>
              Hayır Sayısı : {props.noCount}
            </Text>
          </View>
        </Card>
        <Text>Sistemde Bir arıza oluştu !</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  FinalScreenCard: {
    minHeight: "30%",
    margin: "2%",
    textAlign: "center",
    justifyContent: "center",
  },
  FinalScreenHeader: {
    fontSize: 20,
    color: "#b71c1c",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    margin: 20,
  },
  FinalScreenYes: {
    fontSize: 20,
    color: "#b71c1c",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    margin: 20,
  },
  FinalScreenNo: {
    fontSize: 20,
    color: "#1b5e20",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    margin: 20,
  },
  FinalScreenMessage: {
    fontSize: 20,
    color: "#1b5e20",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    margin: 20,
  },
});

export default FinalScreen;
