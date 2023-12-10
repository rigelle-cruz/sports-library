import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentRepository } from '../lib/ContentRepository';
import {
	setSports,
	setLoading,
	selectSports,
	selectLoading,
} from '../slices/sportsSlice';

export const SportsList = () => {
	const dispatch = useDispatch();
	const sports = useSelector(selectSports);
	const loading = useSelector(selectLoading);

	const fetchSports = async () => {
		dispatch(setLoading(true));
		const content = new ContentRepository();
		const fetchedSports = await content.getFeaturedSports();
		dispatch(
			setSports(fetchedSports.sort(() => 0.5 - Math.random()).slice(0, 3))
		);
		dispatch(setLoading(false));
	};

	useEffect(() => {
		fetchSports();
	}, [dispatch]);

	if (loading) return <div>Loading...</div>;

	return (
		<div>
			{sports.map((sport, index) => (
				<div key={index}>
					<h2>{sport.name}</h2>
					<p>{sport.description}</p>
				</div>
			))}
			<button onClick={fetchSports}>Refresh Sports</button>
		</div>
	);
};

export default SportsList;
