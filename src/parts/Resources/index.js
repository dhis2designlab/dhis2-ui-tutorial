import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Link from '../../components/Link.js'

import styles from "./styles.module.css";


function Links() {

  return (
    <div> 
        <Container>
            <Grid  container spacing={5}>
                <Grid item xs={12} sm={12} md={12} className={styles.header}>
                    <h2>Resources</h2>
                </Grid>
                <Link />
                <Link />
                <Link />
            </Grid>
        </Container>
    </div>
)}

export default Links;
