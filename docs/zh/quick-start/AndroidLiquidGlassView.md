---
prev:
  text: '快速开始'
  link: '/zh/getting-started.md'
next: false
---

# AndroidLiquidGlassView

::: tip
在 <strong>Android 13</strong> 以下的设备上，<strong>View</strong> 将保持透明的背景，不会呈现任何效果。
:::

### XML布局
```xml :no-line-numbers
<RelativeLayout
    android:id="@+id/root"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <!-- 内容容器 -->
    <FrameLayout
        android:id="@+id/content_container"
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <RelativeLayout
            android:layout_width="match_parent"
            android:layout_height="match_parent">

            <ImageView
                android:id="@+id/images"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:scaleType="centerCrop"
                android:src="@drawable/image" />

        </RelativeLayout>
    </FrameLayout>

    <!-- 液态玻璃视图 -->
    <com.qmdeve.liquidglass.widget.LiquidGlassView
        android:id="@+id/liquidGlassView"
        android:layout_width="200dp"
        android:layout_height="200dp"
        android:layout_centerInParent="true" />
</RelativeLayout>
```

### 绑定采样源
```java
ViewGroup content = findViewById(R.id.content_container);
LiquidGlassView liquidGlassView = findViewById(R.id.liquidGlassView);

// 绑定采样源
liquidGlassView.bind(content);
```

### API 参考
| 方法                                | 描述                           | 默认值    |
|-----------------------------------|------------------------------|--------|
| `bind(ViewGroup source)`          | **绑定采样源**                    | `-`    |
| `setCornerRadius(float px)`       | **设置圆角半径 (px) (0dp-99dp)**   | `40dp` |
| `setRefractionHeight(float px)`   | **设置折射高度 (px) (12dp-50dp)**  | `20dp` |
| `setRefractionOffset(float px)`   | **设置折射偏移 (px) (20dp-120dp)** | `70dp` |
| `setTintColorRed(float red)`      | **设置色调（R） (0f-1f)**          | `1.0f` |
| `setTintColorGreen(float green)`  | **设置色调（G） (0f-1f)**          | `1.0f` |
| `setTintColorBlue(float blue)`    | **设置色调（B） (0f-1f)**          | `1.0f` |
| `setTintAlpha(float alpha)`       | **设置色调可见度 (0f-1f)**         | `0.0f` |
| `setDispersion(float dispersion)` | **设置色散效果 (0f-1f)**           | `-`    |
| `setBlurRadius(float radius)`     | **设置模糊半径**                   | `0f`   |
| `setDraggableEnabled(boolean enable)`    | **启用/禁用拖动**           | `false` |
| `setElasticEnabled(boolean enable)`    | **启用/禁用弹性效果**         | `false` |
| `setTouchEffectEnabled(boolean enable)`    | **启用/禁用高光效果**     | `false` |

---
