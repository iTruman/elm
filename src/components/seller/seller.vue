<template>
	<div class="seller">
		<div class="content-wrapper">
			<div class="brief-info">
				<h1 class="name">{{ seller.name }}</h1>
                <div class="star-wrapper">
                    <!-- <star :size="48" :score="seller.score"></star> -->
                </div>
                <span >{{ seller.ratingCount }}</span>
			</div>
		</div>
	</div>
</template>

<script>
    import star from 'components/star/star';

	export default {
		data () {
	    	return {
	        	seller: {}
	      	}
	    },
	    created () {
	        this.$http.get('/api/seller').then((response) => {
	            console.log(response.status);
	            response = response.body;   // json() 已经不返回object
	            if (response.errno === 0){
	                this.seller = response.data;
	            }
	        }, response => { console.log('error') })
	    },
        components: {
        	star
        }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
/*	.seller
		position: relative
		display: flex
		width: 100%
		.content-wrapper
			.brief-info
				color: #000*/
</style>
