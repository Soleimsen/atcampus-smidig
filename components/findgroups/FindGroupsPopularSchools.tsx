import FlatButton from 'components/buttons/FlatButton'
import React from 'react'

const FindGroupsPopularSchools = ({ schoolName }) => {
    return (
        <>
            <div className='flex flex-col py-4 px-48 '>
                <FlatButton
                    className={
                        'text-2xl bg-slate-200 text-purple-1 border-solid border-purple-1 hover:bg-purple-5 hover:input-shadow'
                    }>
                    {schoolName}
                </FlatButton>
            </div>
        </>
    )
}

export default FindGroupsPopularSchools
