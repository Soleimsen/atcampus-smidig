import SubjectCard from 'components/cards/SubjectCard'
import { useGroups } from 'hooks/useGroups'
import { baseUrl } from 'lib/constants'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'
import type { Group } from 'types/groups'

const Groups = () => {
    const groups = useGroups()
    if (groups.isLoading) {
        return (
            <>
                <Head>
                    <title>Grupper</title>
                </Head>
                <div>Loading...</div>
            </>
        )
    }
    if (groups.isError) {
        return (
            <>
                <Head>
                    <title>Grupper</title>
                </Head>
                <div>Error: {groups.error.message}</div>
            </>
        )
    }
    return (
        <div>
            <Head>
                <title>Grupper</title>
            </Head>
            {groups.data && (
                <div>
                    <h1>Groups</h1>
                    <ul className='flex flex-wrap gap-4'>
                        {groups.data.length === 0 ? (
                            <div>
                                <p>Not in any groups.</p>
                            </div>
                        ) : (
                            <>
                                {groups.data.map((group) => (
                                    <li key={group.groupName}>
                                        <SubjectCard
                                            groupName={group.groupName}
                                            groupId={group._id}
                                            groupImage={
                                                'https://image.shutterstock.com/image-vector/geography-open-book-hand-drawn-260nw-1782248465.jpg'
                                            }
                                            compact={true}
                                            subjectCode={'PG63'}
                                            members={group.members.length}
                                            totalMembers={group.members.length}
                                        />
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Groups

export async function getServerSideProps() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery<Group[], Error>('groups', async () => {
        const res = await fetch(`${baseUrl}/api/groups`)
        return res.json()
    })
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
