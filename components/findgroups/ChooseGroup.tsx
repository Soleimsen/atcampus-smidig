import SubjectCard from 'components/cards/SubjectCard'
import SubjectCardCompact from 'components/cards/SubjectCardCompact'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useGroups } from 'hooks/useGroups'
import FlatButton from 'components/buttons/FlatButton'
import { ObjectId } from 'mongodb'
import { baseUrl } from 'lib/constants'
import {
    dehydrate,
    QueryClient,
    useMutation,
    useQuery,
    useQueryClient,
} from 'react-query'
import { Group } from 'types/groups'
import { fetchReactQuery, postJSON, postReactQuery } from 'hooks/useGroups'

interface MutateResponse {
    message: string
    private: boolean
}

interface MutateError {
    error: {
        message: string
    }
    message: string
}

const ChooseGroup = () => {
    const [selectedGroup, setSelectedGroup] = useState('')

    const groups = useQuery<Group[], Error>(
        'groupstest',
        fetchReactQuery('testjoingroup')
    )

    if (groups.isLoading) {
        return <div>Loading...</div>
    }
    if (groups.isError) {
        return <div>Error: {groups.error.message}</div>
    }

    console.log(selectedGroup)

    return (
        <>
            <div className='m-4 text-dark-1'>
                <div className='text-xl font-semibold'>
                    Trykk for å bli å bli tatt til en gruppe
                </div>
                <div className='text-sm'>
                    Noen grupper må gruppemedlemmer godkjennes
                </div>
            </div>
            <div className='flex flex-wrap'>
                {groups.data.map(
                    (group: {
                        groupName: React.Key
                        _id: ObjectId
                        description: string
                        members: string | any[]
                        maxMembers: number
                    }) => (
                        <li
                            key={group._id.toString()}
                            className={'m-6 list-none flex'}>
                            <SubjectCard
                                groupName={group.groupName.toString()}
                                groupId={group._id}
                                groupImage={
                                    'https://image.shutterstock.com/image-vector/geography-open-book-hand-drawn-260nw-1782248465.jpg'
                                }
                                compact={false}
                                subjectCode={group.description}
                                members={group.members.length}
                                totalMembers={group.maxMembers}
                            />
                        </li>
                    )
                )}
            </div>
        </>
    )
}

export default ChooseGroup