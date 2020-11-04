
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Button, Pagination} from '@dhis2/ui';

import styles from "./styles.module.css"

function PaginationComponent() {
  
return (
    <Grid xs={12} sm={6} md={6}>
        <div className={styles.box}>
            <Grid item xs={12} sm={12} md={12}>
                <h4>Pagination</h4>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>  
                <Pagination
                    dataTest="dhis2-uiwidgets-pagination"
                    nextPageText="next"
                    page={10}
                    onPageChange={console.log("Change page")}
                    onPageSizeChange={console.log("Change size")}
                    pageCount={21}
                    onChange="Click"
                    pageSelectText="Page"
                    pageSize={50}
                    pageSizeSelectText="Items per page"
                    pageSizes={[
                        '5',
                        '10',
                        '20',
                        '30',
                        '40',
                        '50',
                        '75',
                        '100'
                    ]}
                    pageSummaryText="Page 10 of 21"
                    previousPageText="Previous"
                    total={1035}
                />
            </Grid>
        </div>
    </Grid>
)}

export default PaginationComponent