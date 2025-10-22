import { useState, useEffect } from 'react'

export default function useHousing() {
    const [housingList, setHousingList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('/data/data.json')
            .then(res => {
                if (!res.ok) throw new Error('Erreur réseau')
                return res.json()
            })
            .then(data => setHousingList(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [])

    return { housingList, loading, error }
}
