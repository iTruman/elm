<template>
	<transition name="move">
		<div class="food" v-show="showFlag">
			<div class="food-wrapper">
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
					<!-- <div class="cartcontrol-wrapper">
						<cartcontrol :food="food" v-on:cartadd="_add"></cartcontrol>
					</div> -->
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: {
			food: {
				type: Object
			}
		},
		data() {
			return {
				showFlag: false
			}
		},
		methods: {
			show() {
				this.showFlag = true;
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.food
		left: 0
		top: 0
		bottom: 0
		z-index: 15
		width: 100%
		background: rgba(7,17,27,.4)
        filter: blur(10px)
		transform: translate3d(0, 0, 0)
		&.move-enter-active,&.move-leave-active
			transition: all .5s
		&.move-enter,&.move-leave-active
			transform: translate3d(100%, 0, 0)
		.food-wrapper
		    position: relative
			top: 27%
		    left: 25%
		    background: #FFF
</style>
