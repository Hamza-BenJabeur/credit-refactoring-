import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inconTitle:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  },
  image: {
    marginLeft: '15px',
  },
  search:{
    marginRight:"15px"
  }
}));