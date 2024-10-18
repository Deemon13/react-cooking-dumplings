import PropTypes from 'prop-types';

import styles from './Content.module.css';

export const Content = ({ steps, activeIndex }) => {
	return <div className={styles['steps-content']}>{steps[activeIndex].content}</div>;
};

Content.propTypes = {
	steps: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			content: PropTypes.string,
		}),
	),
	activeIndex: PropTypes.number,
};
