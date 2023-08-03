import { Button, Tabs } from 'flowbite-react'

const Categories = ({ handleClick }) => {
  const [tab, setTab] = useState('ALL')
  const handleTabChange = (event, newValue) => {
    console.log(newValue)
    setTab(newValue)
  }
  return (
    <div>
      <Tabs.Group
        aria-label="Default tabs"
        style="default"
        className="flex justify-evenly"
        onChange={handleTabChange}
      >
        <Tabs.Item id="ALL" value="ALL" title="ALL" selected={tab === 'ALL'}>
         
        </Tabs.Item>
        <Tabs.Item id="LAF"  value="LAF" title="Lost & Found" selected={tab === 'LAF'}>
         
        </Tabs.Item>
        <Tabs.Item id="ELE" value="ELE" title="Electronic" selected={tab === 'ELE'}>
       
        </Tabs.Item>
        <Tabs.Item id="STD" value="STD" title="Study" selected={tab === 'STD'}>
         
        </Tabs.Item>
        <Tabs.Item id="OT" value="OT" title="Others" selected={tab === 'OT'}>
        
        </Tabs.Item>
      </Tabs.Group>
    </div>
  )
}
export default Categories
