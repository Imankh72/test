interface CheckMarkIconProps {
  color?: string;
  width?: string;
  height?: string;
}

export const CheckMarkIcon = ({
  color = "#1E8E29",
  width = "21",
  height = "21",
}: CheckMarkIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M9.40625 2.14354C10.01 1.62729 10.9987 1.62729 11.6112 2.14354L12.9937 3.33353C13.2563 3.56103 13.7463 3.74479 14.0962 3.74479H15.5837C16.5112 3.74479 17.2725 4.50603 17.2725 5.43353V6.92103C17.2725 7.26228 17.4562 7.76103 17.6837 8.02353L18.8738 9.40603C19.39 10.0098 19.39 10.9985 18.8738 11.611L17.6837 12.9935C17.4562 13.256 17.2725 13.746 17.2725 14.096V15.5835C17.2725 16.511 16.5112 17.2723 15.5837 17.2723H14.0962C13.755 17.2723 13.2563 17.456 12.9937 17.6835L11.6112 18.8735C11.0075 19.3898 10.0188 19.3898 9.40625 18.8735L8.02375 17.6835C7.76125 17.456 7.27125 17.2723 6.92125 17.2723H5.4075C4.48 17.2723 3.71875 16.511 3.71875 15.5835V14.0873C3.71875 13.746 3.535 13.256 3.31625 12.9935L2.135 11.6023C1.6275 10.9985 1.6275 10.0185 2.135 9.41478L3.31625 8.02353C3.535 7.76103 3.71875 7.27103 3.71875 6.92978V5.42478C3.71875 4.49728 4.48 3.73603 5.4075 3.73603H6.92125C7.2625 3.73603 7.76125 3.55228 8.02375 3.32478L9.40625 2.14354Z"
        fill={color}
      />
      <path
        d="M9.44125 13.2739C9.26625 13.2739 9.1 13.2039 8.9775 13.0814L6.86 10.9639C6.60625 10.7101 6.60625 10.2901 6.86 10.0364C7.11375 9.78262 7.53375 9.78262 7.7875 10.0364L9.44125 11.6901L13.2038 7.92762C13.4575 7.67387 13.8775 7.67387 14.1312 7.92762C14.385 8.18137 14.385 8.60137 14.1312 8.85512L9.905 13.0814C9.7825 13.2039 9.61625 13.2739 9.44125 13.2739Z"
        fill={color}
      />
    </svg>
  );
};