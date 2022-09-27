import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { SearchBar } from "../components/SearechBar";
import useResultes from "../hooks/useResultes";
import ResultList from "../components/ResultList";
export const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResultes();

  const filterResultByPrice = price => {
    return results.filter(resutl => {
      return resutl.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar onTermSubmit={searchApi} term={term} onChangeTerm={setTerm} />
      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <ScrollView>
        <ResultList results={filterResultByPrice("$")} title="Cost Effective" />
        <ResultList results={filterResultByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});
