import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import Empty from '../components/empty';
// import Separator from '../components/vertical-separator';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout'

class CategoryList extends React.Component {
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias :("/>
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
        <Category {...item} />
    )
  }
  render() {
    return (
      <Layout
        title="Categorias"
      >
        <FlatList 
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
      )
  }
}

export default CategoryList;