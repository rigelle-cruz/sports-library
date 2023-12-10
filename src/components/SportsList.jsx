import { useEffect, useCallback, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
	const [sportsList, setSportsList] = useState([]);

	useEffect(() => {
		const savedList = localStorage.getItem('savedList');
		if (savedList) {
			setSportsList(JSON.parse(savedList));
		} else {
			fetchSports();
		}
	}, []);

	const fetchSports = useCallback(async () => {
		dispatch(setLoading(true));
		try {
			const repository = new ContentRepository();
			const fetchedSports = await repository.getFeaturedSports();
			const selectedSports = fetchedSports
				.sort(() => 0.5 - Math.random())
				.slice(0, 3)
				.map((sport, index) => ({
					id: `item-${index}`,
					name: sport.name,
					description: sport.description,
				}));

			setSportsList(selectedSports);
			localStorage.setItem('savedList', JSON.stringify(selectedSports));
			dispatch(setSports(selectedSports));
		} catch (error) {
			console.error('Error fetching sports list:', error);
		} finally {
			dispatch(setLoading(false));
		}
	}, [dispatch]);

	const onDragEnd = (result) => {
		if (!result.destination) return;
		const list = Array.from(sportsList);
		const shuffledList = list.splice(result.source.index, 1)[0];
		list.splice(result.destination.index, 0, shuffledList);

		setSportsList(list);
		localStorage.setItem('savedList', JSON.stringify(list));
	};

	if (loading) return <div>Loading...</div>;

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{sportsList.map((sport, index) => (
							<Draggable key={sport.id} draggableId={sport.id} index={index}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										className="sportItem">
										<h2>{sport.name}</h2>
										<p>{sport.description}</p>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
			<button onClick={fetchSports}>Refresh List</button>
		</DragDropContext>
	);
};

export default SportsList;
