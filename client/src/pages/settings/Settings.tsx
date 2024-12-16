import { Input, Label, Text } from '@fluentui/react-components'
import { FormEvent, useEffect, useState } from 'react'
import { expenseCategories } from '../../types/expenseCategories'

const Settings = () => {
  const handelSubmit = async (e: FormEvent) => {
    e.preventDefault()
  }
  const [state, setState] = useState<{ [key: string]: number }>({})
  const [isLoading, setIsLoading] = useState(true)
  const handelChange = (key:string, value: number) => {
    setState({...state, [key]: value})
  }

  const getSettingsData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/settings')
      const data = await res.json()
      setState(data)
      setIsLoading(false)
    } catch (err) {
      
    }
  }

  useEffect(() => {

  }, [])
  

  return (
    <div>
      <Text as='h1'>Settings</Text>
      <form className='inp-style' onSubmit={handelSubmit}>
        {expenseCategories.map((e) => (
          <div>
            <Label htmlFor={e.id}>{e.display}</Label>
            <Input
              value={state[e.id].total.toString()}
              onChange={e => handelChange('total', e.target.valueAsNumber)}
              contentBefore={'₪'}
              appearance='underline'
              type='number'
              size='large'
              id={e.id}
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default Settings
