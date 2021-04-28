import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import Card from "../component/Card";
import Input from "../component/Input";
import TitleText from "../component/TitleText";

const FirstScreen = (props) => {
    
  return (
    <View style={styles.FirstScreenView}>
      <Card style={styles.FirstScreenCard}>
        <Text style={styles.FirstScreenText}>
          Adınız Nedir ?
        </Text>
        <Input style={styles.FirstScreenInput} />
        <TitleText style={styles.FirstScreenNice}>Bilgilendirme</TitleText>
        <Text style={styles.FirstScreenInformation}>
            Herhangi bir sağlık kuruluşuna bağlı olmayıp , sadece insanlara yardım amaçlı yapılmış bir uygulamadır.
            Bir sağlık kuruluşuna bağlı olmadığı için test sonucuna tam olarak güvenilmemelidir.
            Herhangi bir sorumluluk kabul etmemekteyiz !

        </Text>
            <TitleText style={{...styles.FirstScreenNice,...{color:"green"}}}>Nice Sağlıklı Günlere ... </TitleText>
      </Card>
      <Button title="Teste Başla" 
          onPress={()=>props.navigation.navigate("QuestionsScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FirstScreenView: {
    flex: 1,
    backgroundColor: "white",
  },
  FirstScreenCard: {
    minHeight: "20%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin:15
  },
  FirstScreenText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 15,
    margin:10
  },
  FirstScreenInput: {
    width: "70%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  FirstScreenInformation:{
      margin:20
  },
  FirstScreenNice:{
      marginVertical:20
  }
});

export default FirstScreen;
