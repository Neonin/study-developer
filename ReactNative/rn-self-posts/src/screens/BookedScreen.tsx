import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import { PostList } from '../components/PostList'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const BookedScreen = ({ navigation }) => {
  const _openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  }

  const bookedPosts = useSelector(state => state.post.bookedPosts)

  return <PostList data={bookedPosts} onOpen={_openPostHandler} />
}

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Избранное',
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
