import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import ProgressBarTab from './ProgressBarTab'

const ProgressBarTest = ({ step }) => {
    const steps = [1, 2, 3, 4]
    console.log('step: ' + step)
    return (
        <div className='flex flex-row'>
            {/* <ChevronLeftIcon className='h-7 text-purple-1 mr-2'
                onClick={onClick}
            /> */}
            {steps.map((e) => (
                <ProgressBarTab
                    key={e}
                    step={step}
                    value={e}
                    active={e === step + 1}
                    completed={e < step + 1}
                />
            ))}
            {/* <ChevronRightIcon className='h-7 text-purple-1 ml-2'
               onClick={onClick}
            /> */}
        </div>
    )
}

export default ProgressBarTest
