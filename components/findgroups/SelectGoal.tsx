import Checkbox from 'components/general/Checkbox'

const SelectGoal = ({
    selectedGoal,
    setSelectedGoal,
}: {
    selectedGoal: Array<String>
    setSelectedGoal: Function
}) => {
    const goals = [
        {
            id: 1,
            value: 'Bestått',
        },
        {
            id: 2,
            value: 'A',
        },
        {
            id: 3,
            value: 'B',
        },
        {
            id: 4,
            value: 'C',
        },
        {
            id: 5,
            value: 'D',
        },
        {
            id: 6,
            value: 'E',
        },
        {
            id: 7,
            value: 'Stryk',
        },
    ]

    const handleClick = (e: { target: { value: any } }) => {
        if (!selectedGoal.includes(e.target.value)) {
            setSelectedGoal([...selectedGoal, e.target.value])
        } else {
            setSelectedGoal(
                selectedGoal.filter((goal: any) => goal !== e.target.value)
            )
        }
    }

    return (
        <section>
            <h3 className='mb-5'>Hva ønsker du å oppnå?</h3>
            <div className='flex justify-center flex-wrap'>
                {goals.map((goal) => (
                    <Checkbox
                        key={goal.id}
                        name={goal.value}
                        value={goal.value}
                        id={goal.id}
                        selected={selectedGoal}
                        className='hover:transition-all duration-200 ease-in-out transform hover:scale-105'
                        onClick={handleClick}
                    />
                ))}
            </div>
            <div className='w-full border-b-2 border-solid border-dark-5 my-5 mx-auto'></div>
        </section>
    )
}

export default SelectGoal
