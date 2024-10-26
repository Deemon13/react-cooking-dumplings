import PropTypes from 'prop-types';

import styles from './StepsListItem.module.css';

export const StepsListItem = ({ id, title, idx, activeIndex, setActiveIndex }) => {
	const onStepClick = event => {
		setActiveIndex(Number(event.target.innerText) - 1);
	};
	return (
		<li
			className={
				styles['steps-item'] +
				' ' +
				(idx < activeIndex ? styles.done : '') +
				' ' +
				(idx === activeIndex ? styles.active : '')
			}
		>
			<button className={styles['steps-item-button']} onClick={onStepClick}>
				{Number(id)}
			</button>
			{title}
		</li>
	);
};

StepsListItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	idx: PropTypes.number,
	activeIndex: PropTypes.number,
	setActiveIndex: PropTypes.func,
};
