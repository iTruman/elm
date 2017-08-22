<template>
	<div class="food">
		<div class="icon">
			<img :src="food.icon">
		</div>
		<div class="content">
			<h2 class="name">{{ food.name }}</h2>
			<p class="desc">{{ food.description }}</p>
			<div class="extra">
				<span>月售{{ food.sellCount}}</span>
				<span>好评率{{ food.rating}}</span>
			</div>
			<div class="price">
				<span class="now">￥{{food.price}}</span>
				<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
			</div>
			<div class="cartcontrol-wrapper">
				<cartcontrol :food="food" v-on:cartadd="_add"></cartcontrol>
			</div>
		</div>
	</div>
</template>

<script>
	import cartcontrol from 'components/cartcontrol/cartcontrol';

	export default {
		components: {
			cartcontrol
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
