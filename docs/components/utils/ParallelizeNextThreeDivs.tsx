import { useState } from "react";
import "./ParallelizeNextThreeDivs.css";

function getButtonClass(active: boolean, topSpace: boolean) {
  return `hover-fade font-bold text-white max-w-max h-min text-center rounded-full bg-gradient-to-r ${active ? "from-[#4411E1] to-[#7537F9]" : "from-[#666666] to-[#999999]"} px-[16px] py-[8px] text-[14px] leading-[20px] mr-[8px] ${topSpace ? 'mt-[20px]' : ''}`
}

interface Props {
  instructions: string
  label1: string
  label2: string
  label3: string
}

export const ParallelizeNextThreeDivs = (props: Props) => {
  const { instructions,
    label1,
    label2,
    label3 } = props

  const labels = [label1, label2, label3]
  const [setupPreference, setSetupPreference] = useState('none')
  const showInstructions = setupPreference === 'none'
  return <>
    {showInstructions && <>
      {instructions}
      <br />
    </>
    }
    <>
      {labels.map(label => <button
        className={getButtonClass(setupPreference === label, showInstructions)}
        onClick={() => setSetupPreference(label)}
      >
        {label}
      </button>)}
    </>
    <br />
    {labels.includes(setupPreference) && <div className={`dont-mind-me next-three-divs-are-hideable isolate-next-${labels.indexOf(setupPreference)+1}-of-3`} />}
    {setupPreference === 'none' && <div className='dont-mind-me next-three-divs-are-hideable hide-next-3' />}
  </>
}