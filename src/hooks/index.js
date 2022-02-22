import { useEffect, useState } from "react";
import { getUsers } from "utils";

const useRandomUsers = (page = 0) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    results: [],
    info: null,
  });

  const { results, info } = data;

  useEffect(() => {
		getUsers(page)
			.then((response) => {
				const { results, info } = response;
        if (results && info) {
          setData({ results, info })
          setLoading(false)
        }
			})
			.catch((error) => {
        setError(error);
        setLoading(false)
				console.log("error", error);
			});
	}, [page]);

  return { results, info, loading, error }
}

export default useRandomUsers;