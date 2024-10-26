import PropTypes from 'prop-types';

import { StepsListItem } from '../../components';

import styles from './StepsList.module.css';

export const StepsList = ({ steps, activeIndex, setActiveIndex }) => {
	return (
		<ul className={styles['steps-list']}>
			{steps.map(({ id, title }, idx) => {
				return (
					<StepsListItem
						key={id}
						id={id}
						title={title}
						idx={idx}
						activeIndex={activeIndex}
						setActiveIndex={setActiveIndex}
					/>
				);
			})}
		</ul>
	);
};

StepsList.propTypes = {
	steps: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			content: PropTypes.string,
		}),
	),
	activeIndex: PropTypes.number,
	setActiveIndex: PropTypes.func,
};
