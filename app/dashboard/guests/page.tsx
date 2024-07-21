// /app/dashboard/guests/page.tsx
import { getGuestList } from '@/utils/atendees'
import { getCurrentUser } from '@/utils/user'

const GuestsPage = async () => {
  const user = await getCurrentUser()
  const guests = await getGuestList(user.id)

  return (
    <div>
      {guests.map((guest) => (
        <div key={guest.id}>{guest.name}</div>
      ))}
    </div>
  )
}

export default GuestsPage
