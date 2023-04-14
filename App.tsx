import React, {Component} from 'react';
import {ScrollView, SafeAreaView, View, Text, StyleSheet} from 'react-native';

export class App extends Component<object, object> {
  public constructor(props: object) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <SafeAreaView style={style.main}>
        <ScrollView>
          <View style={style.title}>
            <Text style={style.title}>Hello world</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 1,
  },
  title: {
    padding: 30,
    fontSize: 40,
    textAlign: 'center',
  },
});
