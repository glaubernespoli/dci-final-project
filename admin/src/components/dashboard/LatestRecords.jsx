import {
  Card,
  CardHeader,
  CircularProgress,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useAxios from '../../hooks/useAxios';

const LatestRecords = (props) => {
  const { data: records, error, isLoading } = useAxios('get', '/records');

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Card {...props}>
      <CardHeader
        subheader={`${records.length} in total`}
        title="Latest Records"
      />
      <Divider />

      <List>
        {records.map((record, i) => (
          <ListItem divider={i < records.length - 1} key={record._id}>
            <ListItemAvatar>
              <img
                alt={record.name}
                src={record.imageUrl}
                style={{
                  height: 60,
                  width: 55
                }}
              />
            </ListItemAvatar>
            <ListItemText primary={record.name} secondary={record.style} />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Card>
  );
};

export default LatestRecords;
