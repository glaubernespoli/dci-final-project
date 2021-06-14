import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import records from '../../__mocks__/records';

const LatestRecords = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${records.length} in total`}
      title="Latest Records"
    />
    <Divider />

    <List>
      {records.map((record, i) => (
        <ListItem divider={i < records.length - 1} key={record.id}>
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestRecords;
