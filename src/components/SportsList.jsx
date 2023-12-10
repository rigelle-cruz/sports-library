import { useEffect, useCallback } from 'react';
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

	const fetchSports = useCallback(async () => {
		dispatch(setLoading(true));
		try {
			const repository = new ContentRepository();
			const fetchedSports = await repository.getFeaturedSports();
			const selectedSports = fetchedSports
				.sort(() => 0.5 - Math.random())
				.slice(0, 3)
				.map((sport) => ({
					name: sport.name,
					description: sport.description,
				}));
			dispatch(setSports(selectedSports));
		} catch (error) {
			console.error('Error fetching sports list:', error);
		} finally {
			dispatch(setLoading(false));
		}
	}, [dispatch]);

	useEffect(() => {
		fetchSports();
	}, [fetchSports]);

	if (loading) return <div>Loading...</div>;

	return (
		<div>
			{sports.map((sport, index) => (
				<div key={index}>
					<h2>{sport.name}</h2>
					<p>{sport.description}</p>
				</div>
			))}
			<button onClick={fetchSports}>Refresh List</button>
      
		</div>
	);
};

export default SportsList;
