import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';

export default function Home() {
  const newLocal = '@assets/images/harvest.png';
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputStyle}
        placeholderTextColor="#EFE3C8"
        searchIcon={{ size: 24 }}
        clearIcon={{ color: '#EFE3C8' }}
        placeholder="Browse your favourite..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171017',
    alignItems: 'center',
  },
  searchBarContainer: {
    backgroundColor: '#191018',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRadius: 15,
    width: '95%',
    paddingHorizontal: 10,
  },
  inputContainer: {
    backgroundColor: '#2c2c2c',
    borderRadius: 15,
  },
  inputStyle: {
    color: '#EFE3C8',
  },
});