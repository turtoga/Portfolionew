import { type ReactNode } from 'react'
import './SkillItem.scss'

type SkillItemProps = {
  children: ReactNode
}

const SkillItem = ({children} : SkillItemProps) => {
  return (
    <div className='skill-item'>
      <p>
        {children}
      </p>
    </div>
  )
}

export default SkillItem;