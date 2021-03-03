import React from 'react'
import Layout from 'patternfly_components/Layout'
import {
    Text, TextVariants, TextContent,
} from '@patternfly/react-core'
import IconList from 'src/components/IconList'
import MetadataHeader from "src/components/SiteMetadata"

export default function AddonCategoryLayout({ data }) {
  const category = data.category

  return (
    <Layout>
      <MetadataHeader title={category.name + ' | Category | Matrix | Add-On'} />
      <TextContent>
        <Text component={TextVariants.h1}>{category.name}</Text>
        <Text>This category has {category.totaladdons} addons in it.</Text>
      </TextContent>
      <IconList items={category.addons} linkroot='/addons/matrix/' />
    </Layout>
  )
}
