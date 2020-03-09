import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { addPost } from '../store/actions/post'
import { IData } from '../interfaces'

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const img =
    'https://images.barrons.com/im-117923?width=620&size=1.5005861664712778'

  const _saveHandler = () => {
    const post: IData = {
      date: new Date().toJSON(),
      text,
      img,
      booked: false,
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Введите текст заметки"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image
            style={{
              width: '100%',
              height: 200,
              marginBottom: 10,
            }}
            source={{
              uri: img,
            }}
          />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={_saveHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Создать пост',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
})

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    margin: 10,
  },
})
