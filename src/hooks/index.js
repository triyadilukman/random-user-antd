import { useEffect, useState } from "react";
import { getUsers } from "utils";

const useRandomUsers = (page = 0) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    results: [],
    info: null,
  });

  useEffect(() => {
		getUsers(page)
			.then((response) => {
				const { results, info } = response;
        if (results && info) {
          setData({ ...data, results, info })
          setLoading(false)
        }
			})
			.catch((error) => {
        setError(error);
        setLoading(false)
				console.log("error", error);
			});
	}, [page]);

  return { results: data.results, info: data.info, loading, error }
}

export default useRandomUsers;