<template>
	<div>
		<transition name="move">
			<div class="food" v-show="showFlag">
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
		</transition>

		<transition name="fade">
			<div class="food-mask" v-show="showFlag" @click="hideFood"></div>
		</transition>
	</div>
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
			},
			hideFood() {
				this.showFlag = false;
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.food
		position: fixed
		left: 10%
		top: 15%
		bottom: 0
		z-index: 16
		width: 80%
		height: 60%
		border: 1px solid #CCC
		background: #FFF
		border-radius: 15px
		box-shadow: 0 1px 0 1px rgba(7,17,27,.7)
		transform: translate3d(0, 0, 0)
		&.move-enter-active,&.move-leave-active
			transition: all .5s
		&.move-enter,&.move-leave-active
			transform: translate3d(0, -120%, 0)
	.food-mask
		position: fixed
		top: 0
		left:0
		bottom: 0
		width: 100%
		z-index: 15
		background: rgba(7,17,27,.4)
		opacity: 1
		&.fade-enter-active, &.fade-leave-active
			transition: all .5s
		&.fade-enter, &.fade-leave-active
			opacity: 0
</style>
