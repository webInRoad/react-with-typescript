import { useState, useEffect } from 'react'
import axios from 'axios'

const useUrlLoader = (url: string, deps: any[] = []) => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<any>(null)
	useEffect(() => {
		setLoading(true)
		axios.get(url).then((result) => {
			setData(result.data)
			setLoading(false)
		})
	}, deps)
	return [data, loading]
}

export default useUrlLoader
