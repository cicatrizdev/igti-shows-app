import React from "react";
import { View, StyleSheet } from "react-native";
import Detail from "../../components/Detail";
import List from "../../components/List";

const ShowsScreen = () =>{
  return (
    <>
      <View style={styles.parentStyle}>
        <View style={styles.listStyle}>
          <List />
        </View>
        <View style={styles.detailStyle}>
          <Detail />
        </View>
      </View>
    
    </>
  )
}

const styles = StyleSheet.create({
  parentStyle:{
    flex:1,
    marginTop:20
  },
  listStyle:{
    flex:4
  },
  detailStyle:{
    flex:3
  }
})

export default ShowsScreen;