const slugify = require("slugify")
import IconList from 'src/components/IconList'

export default function DownloadList(props: {
  items: any[]
}) {
  let items = []
  if (props.items[0].node !== undefined) {
    props.items.map((item: { node: any }, index: any) => items.push(item.node))
  } else {
    items = props.items
  }
  items.forEach(function(item, index) {
    this[index]['slug'] = slugify(item.name, { lower: true });
  }, items);

  return (
      <IconList items={items}
        linkroot='/download/'
        width='90%'
        marginleft='5%'
        marginright='5%'
      />
  )
}
