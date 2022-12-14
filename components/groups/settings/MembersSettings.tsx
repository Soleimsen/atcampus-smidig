import FlatButton from 'components/general/FlatButton'
import MemberCard from './MemberCard'

const MembersSettings = ({ members, admin, handleLeaveGroup }) => {
    return (
        <>
            <div className='flex flex-col bg-white rounded-standard py-2 px-8 w-80 h-96 drop-shadow justify-around'>
                <div>
                    <MemberCard members={members} admin={admin} />
                </div>

                <FlatButton onClick={handleLeaveGroup}>
                    Forlat Gruppe
                </FlatButton>
            </div>
        </>
    )
}

export default MembersSettings
