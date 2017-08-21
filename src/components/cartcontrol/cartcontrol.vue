<template>
	<div class="cartcontrol">
		<transition name="move">
			<div class="decrease" v-show="food.count>0" @click="decreaseCart"><span class="inner icon-remove_circle_outline"></span>
			</div>
		</transition>
		<div class="count"  v-show="food.count>0">{{food.count}}</div>
		<div class="add icon-add_circle" @click="addCart"></div>
	</div>
</template>

<script>
	import Vue from 'vue';

	export default {
		props: {
			food: {
				type: Object
			}
		},
		computed: {

		},
		created() {
		},
		methods: {
			decreaseCart(event){
				if (!event._constructed) {
    				return;
    			}
				if (this.food.count) {
					this.food.count --;
				}
			},
			addCart(event) {
				if (!event._constructed) {
    				return;
    			}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1);
				} else {
					this.food.count ++;
				}
				this.$emit('cartadd', event.target);
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.decrease, .add
			display: inline-block
			padding: 6px
			opacity: 1
			transform: translate3d(0,0,0)
			.inner
				display: inline-block
				font-size: 24px
				line-height: 24px
				color: rgb(0,160,220)
				transition: all .4s linear
				transform: rotate(0)
			&.move-enter-active, &.move-leave-active
				transition: all .4s linear
			&.move-enter, &.move-leave
				opacity: 0
				transform: translate3d(24px,0,0)
				.inner
					transform: rotate(180deg)
		.count
			display: inline-block
			vertical-align: top
			width: 12px
			padding-top: 6px
			text-align: center
			font-size: 10px
			line-height: 24px
			color: rgb(147,153,159)
		.add
			display: inline-block
			font-size: 24px
			line-height: 24px
			color: rgb(0,160,220)
</style>
