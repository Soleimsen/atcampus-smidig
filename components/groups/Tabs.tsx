import type { Dispatch, SetStateAction } from 'react'
import { useCallback } from 'react'

const Tabs = ({
    activeTab,
    setActiveTab,
    tabs,
}: {
    activeTab: number
    setActiveTab: Dispatch<SetStateAction<number>>
    tabs?: string[]
}) => {
    //put const [activeTab, setActiveTab] = useState(0) in parent component

    const renderTabs = useCallback(() => {
        if (!tabs) return null
        return (
            <ul className='flex flex-row justify-evenly sm:justify-start px-3 md:px-6 md:gap-6 items-end font-medium text-dark-3 border-b-2 w-full '>
                {tabs.map((tab, index) => (
                    <div
                        className='h-full'
                        key={tab}
                        onClick={() => setActiveTab(index)}>
                        <button
                            className={
                                'h-full px-2 hover:text-dark-1 ' +
                                (activeTab === index
                                    ? 'text-dark-1 border-b-4  border-purple-1'
                                    : ' ' +
                                      ' text-dark-3 border-b-4 border-white ') +
                                (activeTab !== index
                                    ? ' hover:border-b-4 hover:border-dark-1 '
                                    : '')
                            }>
                            {tab}
                        </button>
                    </div>
                ))}
            </ul>
        )
    }, [activeTab, setActiveTab, tabs])

    return (
        <div className={'h-12 min-w-96 bg-white '}>
            <div className='flex justify-between h-full'>{renderTabs()}</div>
        </div>
    )
}

export default Tabs
